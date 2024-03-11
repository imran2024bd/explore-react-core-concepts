// conditional rendering option 1 :

// export default function Todo ({task , isDone }) {
//    if (isDone === true) {
//     return <li>Finished : {task}</li>
//    }
//    else{
//     return <li>Work on: {task}</li>
//    }
// }

// another way of if function 02 :

// export default function Todo ({task , isDone }) {
//     if (isDone) {
//      return <li>Finished : {task}</li>
//     }
//     return <li>Work on: {task}</li>
//  }


// another way of if tarnary function 03 :

// export default function Todo ({task , isDone }){
//     return (
//         <li>{isDone ? 'Finished Course' : 'Working Going on' } : {task}</li>
//     )
//  }


// another way of conditional rendering opt 4: && ( only true Value execute)
// export default function Todo ({task , isDone }){
//     return (
//         <li>{task} {isDone && ': Done & Ok'}</li>
//     )
//  }


 // another way of conditional rendering opt 5: || ( only False Value execute)
// export default function Todo ({task , isDone }){
//     return (
//         <li>{task} {isDone || ': Do it Properly'}</li>
//     )
//  }


// another way of conditional rendering opt 6:
 export default function Todo ({task , isDone }) {
    let listItem;
    if (isDone) {
     listItem = <li>Finished : {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
 }

// export default function Todo ({task , isDone }) {
//     return (
//         <li>Task : {task}  </li>
//     )
// }

// export default function Todo ({task , with}) {
//     return (
//         <li>Task : {task} , with : {with}</li>
//     )
// }

// export default function Todo ({task }) {
//     return (
//         <li>Task : {task}  </li>
//     )
// }