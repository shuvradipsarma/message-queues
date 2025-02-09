import { Worker } from "bullmq";

const worker = new Worker("email-queue", async (job) => {
    console.log(`message received with id: ${job.id}`);
    console.log("processing message");
    console.log(`sending email to ${job.data.email}`);
    await sendEmail();
    console.log("email sent successfully!");
},{ connection: { host: "0.0.0.0", port: 6379 } 
});

const sendEmail = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },5000) // 5 seconds delay to simulate email sending
});