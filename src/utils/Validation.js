import validator from 'is_js';
const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `Please enter ${key}`;
  } else {
    return "";
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `minimum 3 characters required for ${key}`;
  } else {
    return "";
  }
};

export default function (data) {
  let error = "";
  const {
    first_Name,
    email,
    last_Name,
    password,
    phoneNumber,
    confirmPassword,
  } = data;

  if (first_Name !== undefined) {
    let emptyValidationText = checkEmpty(first_Name, "name");

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(first_Name, 3, "name");

      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }

  if (last_Name !== undefined) {
   let emptyValidationText = checkEmpty(last_Name, 'last name');
   if (emptyValidationText !== '') {
     return emptyValidationText;
   } else {
     let minLengthValidation = checkMinLength(last_Name, 3, 'Last name');
     if (minLengthValidation !== '') {
       return minLengthValidation;
     }
   }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, "email");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return "Please enter valid email";
      }
    }
  }


  if (phoneNumber !== undefined) {
   let emptyValidationText = checkEmpty(phoneNumber, 'phone number');
   if (emptyValidationText !== '') {
     return emptyValidationText;
   }
   if (!/^[0][1-9]$|^[1-9]\d{8,14}$/.test(phoneNumber)) {
     return 'Please enter valid mobile number';
   }
  }
  if (password !== undefined) {
    let emptyValidationText = checkEmpty(password, "password");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, "password");
      if (minLengthValidation !== "") {
        if (confirmPassword != undefined) {
          return "Password requires minimum 6 characters";
        }
        return "Password is incorrect";
      }
    }
  }
  if (confirmPassword !== undefined) {
    let emptyValidationText = checkEmpty(confirmPassword, "confirmPassword");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    }
    if (confirmPassword != password) {
      return "Password and Confirm Password didn't matched";
    }
  }
}