import React, { useState } from "react";
import { withFormix, Form, Field } from "formix";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values }) => {
  return (
    <div className="user-form">
      <Form>
        <label htmlFor="name-box">
          Email:
          <Field id="name" type="text" name="name" />
        </label>
      </Form>
    </div>
  );
};
