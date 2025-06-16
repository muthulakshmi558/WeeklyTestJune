import React from 'react';

function withValidation(Component) {
  return function ValidatedComponent(props) {
    const validateForm = (data) => {
      if (
        !data.title ||
        !data.description ||
        !data.image ||
        !data.ingredients.length ||
        !data.steps.length
      ) {
        alert("❗ All fields are required");
        return false;
      }
      return true;
    };

    const handleSubmit = (data) => {
      if (validateForm(data)) {
        const stored = JSON.parse(localStorage.getItem("recipes") || "[]");
        const updated = [...stored, { ...data, id: Date.now() }];
        localStorage.setItem("recipes", JSON.stringify(updated));
        alert("🎉 Recipe Added Successfully!");
      }
    };

    return <Component {...props} onSubmit={handleSubmit} />;
  };
}

export default withValidation;
