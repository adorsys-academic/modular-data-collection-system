import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from "@angular/cdk/drag-drop";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-building-kit-page',
  templateUrl: './building-kit-page.component.html',
  styleUrls: ['./building-kit-page.component.scss']
})
export class BuildingKitPageComponent implements OnInit {

  buildingKit: FormGroup;
  editor: FormGroup;
  sidebar;
  main;

  headline1Txt:string = 'Headline 1';
  textField1Txt:string = 'Label Input 1';
  textField1Cls:string = 'text-field text-field--small';
  dropdownField1Txt:string = 'Label Dropdown 1';
  dropdownField1Vls:string[];

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.buildingKit = this._formBuilder.group({
      txtField: [''],
      ddField: ['']
    });
    this.editor = this._formBuilder.group({
      hl1Txt: [''],
      txF1Txt: [''],
      txF1Rd: [''],
      ddF1Txt: [''],
      ddF1Vls: [''],
    });
  }

  ngOnInit() {
    console.log(this.dropdownField1Vls);
  }

  dropdownValuesChanged() {
    console.log("ValueControl", this.dropdownValueControl);
    let values = this.dropdownValueControl.value;
    values = values.split(",");
    values.forEach((value) => value.trim());
    console.log("values", values);
    this.dropdownField1Vls = values.slice();
  }

  @ViewChildren(CdkDrag) draggables: QueryList<CdkDrag>;

  ngAfterViewInit() {
    const arr = this.draggables.toArray();
    this.sidebar = [arr[0], arr[1], arr[2]];
    this.main = [];
  }

  drop(event: CdkDragDrop<any[]>) {
    const nodeToMove = event.item.element.nativeElement;
    const { previousContainer, container, previousIndex, currentIndex } = event;

    console.log(this.sidebar, this.main);

    if (previousContainer === container) {
      moveItemInArray(container.data, previousIndex, currentIndex);

      moveWithinContainer(
        container.element.nativeElement,
        previousIndex,
        currentIndex
      );
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
      transferNodeToContainer(
        nodeToMove,
        container.element.nativeElement,
        currentIndex
      );

      Promise.resolve().then(() => {
        previousContainer.removeItem(event.item);
        event.item.dropContainer = container;
        event.item._dragRef._withDropContainer(container._dropListRef);
        container.addItem(event.item);
      });
    }
  }

  get dropdownValueControl() {
    return this.editor.get("ddF1Vls");
  }
}

function moveWithinContainer(container, fromIndex, toIndex) {
  if (fromIndex === toIndex) {
    return;
  }

  const nodeToMove = container.children[fromIndex];
  const targetNode = container.children[toIndex];

  if (fromIndex < toIndex) {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode.nextSibling);
  } else {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode);
  }
}

function transferNodeToContainer(node, container, toIndex) {
  if (toIndex === container.children.length) {
    container.appendChild(node);
  } else {
    const targetItem = container.children[toIndex];
    targetItem.parentNode.insertBefore(node, targetItem);
  }

}
