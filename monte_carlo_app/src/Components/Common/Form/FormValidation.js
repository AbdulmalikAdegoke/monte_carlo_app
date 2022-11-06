import * as Yup from 'yup'; // imported the yup package for form validation


// exporting the form validation  module to be used across the app
// for fields (input fields)
export const loginFormValidation= Yup.object({

    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    password: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
    )
    .required('Required'),
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const forgottenPasswordFormValidation = Yup.object({
  emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const changePasswordFormValidation = Yup.object({
  newPassword: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
    )
    .required('Required'),

  retypedPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required'),
  

})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const registrationFormValidation = Yup.object({

    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    phoneNumber: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .matches(
      /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/,
      "Phone number is not valid"
    )
    .required('Required'),

    password: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .matches(
      // /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[!@#$%^&*])$/,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
    )
    .required('Required'),
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectFormValidation = Yup.object({
    
    projectTitle: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(200, 'Must be no more than 200 characters')
    .required('Required'),

    projectDescription: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(2000, 'Must be no more than 2000 characters')
    .required('Required'),
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectTaskFormValidation = Yup.object({
    
  taskName: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .required('Required'),

  minTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  pessTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  maxTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  risks: Yup.string()
    .min(2, 'Must be at least 2 characters'),
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const profileFormValidation = Yup.object({

    firstName: Yup.string()
    .min(1, 'Must be at least 1 character')
    .required('Required'),

    lastName: Yup.string()
    .min(1, 'Must be at least 1 character')
    .required('Required'),
    
    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    phoneNumber: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .matches(
      /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/,
      "Phone number is not valid"
    )
    .required('Required'),
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const dashboardFormsValidation = Yup.object({
    
  projectTitle: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(200, 'Must be no more than 200 characters')
    .required('Required'),

  projectDescription: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(2000, 'Must be no more than 2000 characters')
    .required('Required'),

  taskName: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .required('Required'),

  minTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  pessTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  maxTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

  risks: Yup.string()
    .min(2, 'Must be at least 2 characters'),

})