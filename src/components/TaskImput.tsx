type  TaskImputData = {
    SayingHi: string[];
    NumberOfGreeting: number;
    Greeting: string;
};



function TaskImput(componentData: TaskImputData){
    return(
        <>
        {componentData
        .SayingHi
        .map((saying) =>(
            <p>{saying} World!</p>
        ))}
        
        </>

    )
    
} 

export default TaskImput;