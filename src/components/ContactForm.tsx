import React, { useState } from "react";
import { Formik, Form, Field , ErrorMessage} from "formik";
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import MessageForm from "./messageForm";


export const ContactForm = () => {
    const [isError, setIsError] = useState(false)
    const [isSuccessfully, setIsSuccessfully] = useState(false)

    return (
        <>
            <MessageForm message="Se ha enviado el mensaje." isActived={isSuccessfully} customClass={"bg-green-200 text-green-800  message-form-successfully"}/>
            <MessageForm message="No se pudo enviar el mensaje." isActived={isError} customClass={"bg-red-200 text-red-800  message-form-error"}/>
            
            <Formik
                initialValues={{
                    fullName: "",
                    email:"",
                    subject:"",
                    message:""
                }}

                validationSchema={yup.object({
                    fullName: yup.string()
                        .required("The Name is required."),
                    email:yup.string()
                        .required("The Email is required.")
                        .email("Invalid email format."),
                    subject: yup.string()
                        .required("The Subject is required."),
                    message: yup.string()
                        .required("The message is required.")
                        .min(5,"This message is too short!") 
                })}
                
                onSubmit={(data,{setSubmitting,resetForm,submitForm}) => {
                    resetForm()
                    setSubmitting(false)
                    
                    const templateParams = {
                        ...data
                    }
                    
                    emailjs.send("service_5ia2zup", "template_tdzwg4d" , templateParams, "VuAO8SRAx7FeFI5OW")
                        .then(function(response) {
                            setIsSuccessfully(true)
                        }, function(error) {
                            setIsError(true)
                        });
            
                    setTimeout(() => {
                        setIsError(false)
                        setIsSuccessfully(false)
                    }, 4000);
                    
                }}
            >
            
                {({isSubmitting}) => (
                    <Form className='max-w-xl mt-2 mb-6 mx-4 flex flex-col gap-y-3 w-full justify-center bg-slate-300 py-6 px-5 rounded-md' >  
                        
                        <Field
                            type="text"
                            className="form-input"
                            placeholder="Your name..."
                            name="fullName"
                        />

                        <ErrorMessage 
                            name="fullName" 
                            component={"span"} 
                            className="text-sm text-red-700 bg-red-200 border rounded-md py-2 px-8"
                        />
                        
                        <Field
                            type="text"
                            className="form-input"
                            placeholder="Your email..."
                            name="email"
                        />
                        <ErrorMessage 
                            name="email" 
                            component={"span"}
                            className="text-sm text-red-700 bg-red-200 border rounded-md py-2 px-8"
                        />

                        <Field
                            type="text"
                            className="form-input"
                            placeholder="Email subject..."
                            name="subject"
                        />
                        <ErrorMessage 
                            name="subject" 
                            component={"span"}
                            className="text-sm text-red-700 bg-red-200 border rounded-md py-2 px-8"
                        />

                        <Field
                            as="textarea"
                            className="form-input h-30 resize-none"
                            placeholder="The message..."
                            name="message"
                        />
                        <ErrorMessage 
                            name="message" 
                            component={"span"}
                            className="text-sm text-red-700 bg-red-200 border rounded-md py-2 px-8"
                        />
                        
                        <button
                            type="submit"   
                            className="form-btn"
                            style={{ fontFamily: "Poppins" }}
                            disabled={isSubmitting}    
                        >
                            Send mail
                        </button>
                </Form>
                )}
            </Formik>
        </>
    );
};
