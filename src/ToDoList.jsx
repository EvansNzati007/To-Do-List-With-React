import React ,{useState} from  'react';

function ToDoList(){
    const [tasks, setTasks] = useState(["Dejeuner", "Diner", "Souper", "Dormir"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){

        setNewTask(event.target.value)

    }
    function addTask(){
     const  ne = document.getElementById('task').value;
        if(ne == ""){
            alert("Svp!! Veuillez rentrez une tache valide")
        }else{
            setTasks(t => [...t, newTask]);
            setNewTask("");
    

        }
       
    }

    function removeTask(index){
       // alert("are you sure you want to remove "+tasks[index]+ "?");
      
       if( confirm("Etes-vous sur de retirer  "+tasks[index]+" ?")){
        setTasks(tasks.filter((_,i) => i!==index));
       }

           
       

    }
    function moveTaskUp(index){
        if(index >0){

            const upDateTasks = [...tasks];
            [ upDateTasks[index], upDateTasks[index-1]] = 
            [upDateTasks[index - 1], upDateTasks[index]];
            setTasks(upDateTasks);

        }
       

  
    }
    function moveTaskDown(index){

        if(index >=0){

            const upDateTasks = [...tasks];
            [ upDateTasks[index], upDateTasks[index+1]] =
            [upDateTasks[index+1], upDateTasks[index]];
            setTasks(upDateTasks);
        }

    }


    return(
        <>
        <div className='todo-list'>
            <h1>ToDo List</h1>
            <div>
                <input type="text"
                        placeholder='Ajouter une tache...'
                        value={newTask}
                        id='task'
                        onChange={handleInputChange}
                
                />
                <button className='add-task'
                        onClick={addTask}
                                    >
                    Add A Task</button>
            </div>

            <ol>
            {tasks.map((task, index) => <li key={index}>
                <span className="text">{task}</span>
                <button className='delete-btn'
                        onClick={()=> removeTask(index)}>
                    Delete
                </button>
                <button className='up-btn'
                        onClick={()=> moveTaskUp(index)}>
                    Up
                </button>
                <button className='down-btn'
                        onClick={()=> moveTaskDown(index)}>
                Down
                </button>
                 </li>
                
                
            )}
        </ol>
        </div>
        
        </>
    );
}

export default ToDoList;