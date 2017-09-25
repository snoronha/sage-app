import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as go from 'gojs';

@Component({
    selector: 'app-diagram-editor',
    templateUrl: './diagram-editor.component.html',
    styleUrls: ['./diagram-editor.component.css']
})

export class DiagramEditorComponent implements OnInit {
    private diagram: go.Diagram = new go.Diagram();
    private palette: go.Palette = new go.Palette();

    @ViewChild('diagramDiv')
    private diagramRef: ElementRef;

    @ViewChild('paletteDiv')
    private paletteRef: ElementRef;

    @Input()
    get model(): go.Model { return this.diagram.model; }
    set model(val: go.Model) { this.diagram.model = val; }

    @Output()
    nodeSelected = new EventEmitter<go.Node|null>();

    @Output()
    modelChanged = new EventEmitter<go.ChangedEvent>();

    constructor() {
        const $ = go.GraphObject.make;
        this.diagram = new go.Diagram();
        this.diagram.initialContentAlignment = go.Spot.Center;
        this.diagram.allowDrop = true;  // necessary for dragging from Palette
        this.diagram.undoManager.isEnabled = true;
        this.diagram.addDiagramListener("ChangedSelection",
                                        e => {
                                            const node = e.diagram.selection.first();
                                            this.nodeSelected.emit(node instanceof go.Node ? node : null);
                                        });
        this.diagram.addModelChangedListener(e => e.isTransactionFinished && this.modelChanged.emit(e));

        this.diagram.nodeTemplate =
            $(go.Node, "Auto",
              new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
              $(go.Shape, "RoundedRectangle",
                {
                    parameter1: 20,  // the corner has a large radius
                    fill: "white", strokeWidth: 0,
                    portId: "",
                    cursor: "pointer",
                    // allow many kinds of links
                    fromLinkable: true, toLinkable: true,
                    fromLinkableSelfNode: true, toLinkableSelfNode: true,
                    fromLinkableDuplicates: true, toLinkableDuplicates: true,
                },
                new go.Binding("fill", "color")),
              $(go.TextBlock,
                {
                    font: "bold 11pt helvetica, bold arial, sans-serif",
                    margin: 8,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
             );

        this.diagram.nodeTemplate.selectionAdornmentTemplate =
            $(go.Adornment, "Spot",
              $(go.Panel, "Auto",
                $(go.Shape, { fill: null, stroke: "blue", strokeWidth: 2 }),
                $(go.Placeholder)  // a Placeholder sizes itself to the selected Node
               ),
              // the button to create a "next" node, at the top-right corner
              $("Button",
                {
                    alignment: go.Spot.TopRight,
                    click: this.addNodeAndLink  // this function is defined below
                },
                $(go.Shape, "PlusLine", { width: 6, height: 6 })
               ) // end button
             ); // end Adornment

        this.diagram.linkTemplate =
            $(go.Link,  // the whole link panel
              {
                  curve: go.Link.Bezier, adjusting: go.Link.Stretch,
                  reshapable: true, relinkableFrom: true, relinkableTo: true,
                  toShortLength: 3
              },
              new go.Binding("points").makeTwoWay(),
              new go.Binding("curviness"),
              $(go.Shape,  // the link shape
                { strokeWidth: 1.5 }),
              $(go.Shape,  // the arrowhead
                { toArrow: "standard", stroke: null }),
              $(go.Panel, "Auto",
                $(go.Shape,  // the label background, which becomes transparent around the edges
                  {
                      fill: $(go.Brush, "Radial",
                              { 0: "rgb(240, 240, 240)", 0.3: "rgb(240, 240, 240)", 1: "rgba(240, 240, 240, 0)" }),
                      stroke: null
                  }),
                $(go.TextBlock, "transition",  // the label text
                  {
                      textAlign: "center",
                      font: "9pt helvetica, arial, sans-serif",
                      margin: 4,
                      editable: true  // enable in-place editing
                  },
                  // editing the text automatically updates the model data
                  new go.Binding("text").makeTwoWay())
               )
             );

        this.palette = new go.Palette();
        this.palette.nodeTemplateMap = this.diagram.nodeTemplateMap;

        // initialize contents of Palette
        this.palette.model.nodeDataArray = [
            { text: "Message", color: "orange" },
            { text: "External Action", color: "lightgreen" },
        ];
    }

    ngOnInit() {
        this.diagram.div = this.diagramRef.nativeElement;
        this.palette.div = this.paletteRef.nativeElement;
    }

    addNodeAndLink(e, obj) {
        console.log("Add node + link", obj);
        // to be translated to typescript
        /*
        var adornment = obj.part;
        var diagram = e.diagram;
        diagram.startTransaction("Add State");
        // get the node data for which the user clicked the button
        var fromNode = adornment.adornedPart;
        var fromData = fromNode.data;
        // create a new "State" data object, positioned off to the right of the adorned Node
        var toData = { text: "new" };
        var p = fromNode.location.copy();
        p.x += 200;
        toData.loc = go.Point.stringify(p);  // the "loc" property is a string, not a Point object
        // add the new node data to the model
        var model = diagram.model;
        model.addNodeData(toData);

        // create a link data from the old node data to the new node data
        var linkdata = {
            from: model.getKeyForNodeData(fromData),  // or just: fromData.id
            to: model.getKeyForNodeData(toData),
            text: "transition"
        };
        // and add the link data to the model
        model.addLinkData(linkdata);

        // select the new Node
        var newnode = diagram.findNodeForData(toData);
        diagram.select(newnode);

        diagram.commitTransaction("Add State");

        // if the new node is off-screen, scroll the diagram to show the new node
        diagram.scrollToRect(newnode.actualBounds);
        */
    }
}
