import { Component, OnInit } from "@angular/core";
import { Iitem, ItemFormClass } from "../appInterface/itemInterface";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { IAppState } from "../core/storeInterface";
import { Store } from "@ngrx/store";
import { addItem } from "../core/action/editAction";

@Component({
  selector: "app-edit-item",
  templateUrl: "./editItem.component.html",
  styleUrls: ["./editItem.component.css"]
})
export class EditItemComponent implements OnInit {
  itemForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>
  ) {
    this.itemForm = this.createFormGroup(formBuilder);
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group(new ItemFormClass());
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ItemFormClass = Object.assign({}, this.itemForm.value);
    const itemResult: Iitem = { taskId: result.taskId, task: result.task };
    // Do useful stuff with the gathered data
    this.store.dispatch(addItem(itemResult));

    console.log(result);
    console.log("test");
  }

  ngOnInit() {}
}
