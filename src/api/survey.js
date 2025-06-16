import axios from 'axios';

export const fetchAllSurveys = () => {
  return axios.get('/data/survey.json')
    .then(res => {
      const surveysObject = res.data;
      const surveyList = Object.entries(surveysObject).map(([id, survey]) => ({
        id,
        title: survey.title
      }));
      return { data: surveyList }; 
    });
};

export const fetchSurveyById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('/data/survey.json')
      .then(res => {
        const survey = res.data[id];
        if (survey) {
          resolve({ data: survey });
        } else {
          reject(new Error(`Survey with ID ${id} not found`));
        }
      })
      .catch(err => reject(err));
  });
};

export const fetchResponsesById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('/data/responses.json')
      .then(res => {
        const response = res.data[id];
        if (response) {
          resolve({ data: response });
        } else {
          reject(new Error(`Response for Survey ID ${id} not found`));
        }
      })
      .catch(err => reject(err));
  });
};
