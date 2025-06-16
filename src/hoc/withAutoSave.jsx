import { useEffect } from 'react';

function withAutoSave(WrappedComponent) {
  return function AutoSaveWrapper(props) {
    const { formData } = props;

    useEffect(() => {
      if (formData && Object.keys(formData).length > 0) {
        const timeout = setTimeout(() => {
          localStorage.setItem('survey-draft', JSON.stringify(formData));
          console.log(' Auto-saved to localStorage:', formData);
        }, 1000); 

        return () => clearTimeout(timeout);
      }
    }, [formData]);

    return <WrappedComponent {...props} />;
  };
}

export default withAutoSave;
