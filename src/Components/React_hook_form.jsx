import React from 'react'
import { useForm } from 'react-hook-form'
import './React_hook_form.css'

export const React_hook_form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Register</h2>
      <p className="form-subtitle">Fill in all fields to continue</p>

      <form onSubmit={handleSubmit(submit)}>

        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("name", {
            required: "Fill This Field",
            minLength: { value: 3, message: "Name Should be at Least 3 Chars" },
            pattern: { value: /^[A-Za-z\s]+$/, message: "Name Should Contain Only Letters" }
          })} />
          <p className="error-msg">{errors?.name?.message}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email", {
            required: "Fill This Field",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a Valid Email" }
          })} />
          <p className="error-msg">{errors?.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password", {
            required: "Fill This Field",
            minLength: { value: 6, message: "Password Should be at Least 6 Chars" },
            pattern: { value: /^(?=.*[A-Za-z])(?=.*\d).+$/, message: "Password Must Contain Letters and Numbers" }
          })} />
          <p className="error-msg">{errors?.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Phone No</label>
          <input type="tel" {...register("phone", {
            required: "Fill This Field",
            pattern: { value: /^[0-9]{10}$/, message: "Enter a Valid 10 Digit Number" }
          })} />
          <p className="error-msg">{errors?.phone?.message}</p>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select {...register("gender", { required: "Select a Gender" })}>
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="error-msg">{errors?.gender?.message}</p>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input type="text" placeholder="e.g. React, Node" {...register("skills", {
            required: "Fill This Field",
            minLength: { value: 2, message: "Enter at Least One Skill" },
            pattern: { value: /^[A-Za-z,\s]+$/, message: "Skills Should Contain Only Letters" }
          })} />
          <p className="error-msg">{errors?.skills?.message}</p>
        </div>

        <button className="submit-btn" type="submit">Done Submit</button>
      </form>
    </div>
  )
}