function printTask(id, task) {
  let space = id < 10 ? "   " : "    ";
  let status = task.done ? "x" : " ";
  let deadline = task.dueDate !== undefined ? `(${task.dueDate.toDateString().slice(4, -5)})` : '';
  let desc = task.desc !== undefined ? `\n${space}${task.desc}` : '';
  
  console.log(`${id}. [${status}] ${task.title} ${deadline}${desc}`);
}

printTask(10, {
    done: true,
    title: "Learn 'Выразительный JavaScript'",
    desc: "ссылка на gihub.book",
    dueDate: new Date('2022-01-17'),
  });

// function printTask(id, task) {
//   let status = task.done ? 'x' : ' ';
//   let space = id < 10 ? '   ' : '    ';
//   let date = '';
//   let output = '';

//   if (task.dueDate === undefined) {
//     output = `${id}. [${status}] ${task.title}\n${space}${task.desc}`
//     console.log(output)
//   } else {
//     date = task.dueDate.toDateString().slice(4, -5)
//     output = `${id}. [${status}] ${task.title} (${date})\n${space}${task.desc}`
//     console.log(output)
//   }
// }
// // // Виклик функції
// printTask(10, {
//   done: true,
//   title: 'Objects',
//   desc: 'Learn more about this',
//   dueDate: new Date('2022-01-17')
// })

// // let done = task.done ? '[x]' : '[ ]';
// // const options = {month: 'short', day: 'numeric'};
// // let adaptedDate = task.dueDate !== undefined ? ${"(" + this.dueDate.toLocaleDateString('en-US', options) + ")"} : '';
// // if (task.dueDate === "" ||  undefined) {
// //             if (task.desc === ""  || undefined) {
// //                 return (${task.id}. ${done} ${task.title})
// //             } else {
// //                 return (${task.id}. ${done} ${task.title}\n  ${task.desc})
// //             }
// //         } else {
// //             if (task.desc === ""  || undefined) {
// //                 return (${task.id}. ${done} ${task.title} ${adaptedDate})
// //             }
// //             return (${id}. ${done} ${task.title} ${adaptedDate}\n   ${task.desc})
// //         }