import { useEffect, useState } from 'react';
import { sortArray } from '../utils';
import axios from 'axios';

function useProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://api.github.com/users/MaximilianLartell/repos',
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.nebula-preview+json',
      },
    })
      .then((response) => {
        const resArray = response.data.map((project) => {
          const proj = {
            name: project.name,
            description: project.description,
            url: project.html_url,
            homepage: project.homepage,
            created_at: project.created_at,
            language: project.language,
          };
          return proj;
        });
        const newArray = sortArray(resArray);

        setProjects([...newArray]);
        return null;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {}, []);

  return projects;
}

export default useProjects;
