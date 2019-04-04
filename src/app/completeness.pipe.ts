import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './models/task.model';
import { Input } from '@angular/compiler/src/core';

@Pipe({
  name: "completeness",
  pure: false

})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {
    var output: Task[] = [];
    if(desiredCompleteness === "incompleteTasks") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedTasks") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
 

// The first parameter, input, is an array of objects to be transformed (or filtered). In our case, this is an array of Tasks.

// The first is called name. This will be used in our templates.

// The second is called pure. Set this to false for now. By setting pure to true, our pipe becomes stateless. This means it transforms input to output but doesn't do anything else or store any information until we explicitly tell it to.

// Conversely, we can make our pipe stateful by setting pure to false. This tells Angular to check if output has changed more often, causing it to update as soon as we change something about a Task, not only when the menu option changes.