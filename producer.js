import { Queue } from "bullmq";

const notificationsQueue = new Queue("email-queue",{
    connection:{
        host:"127.0.0.1",
        port:6379
    }
});

async function init(){
    const res = await notificationsQueue.add('email to shuv', {
        email:'shuv@gmail.com', 
        subject:'Hello Shuv', 
        body:'Hey Shuv, welcome to bullmq learning'
    });
    console.log('job added to queue',res.id)
}

init();
