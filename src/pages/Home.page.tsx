import { useEffect, useState } from 'react';
import { TextInput } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  useEffect(() => {
    document.title = '123';
    setInterval(() => {
      document.title === '123' ? (document.title = 'abc') : (document.title = '123');
    }, 1000);
  }, []);

  const [patientInfo, setPatientInfo] = useState({
    Name: '',
    Age: '',
    Sex: '',
  });
  const [vitals, setVitals] = useState({
    BP: '',
    Temp: '',
    RR: '',
    'O2 Stat': '',
    Ht: '',
    Wt: '',
  });

  console.log(vitals);
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      {/* <a href="src\assets\docs\sparkcase-I.dotx" download>
        DOWNLOAD FILE
      </a> */}
      {Object.keys(patientInfo).map((label) => {
        return (
          <TextInput
            label={label}
            value={patientInfo[label]}
            onChange={(e) =>
              setPatientInfo({
                ...patientInfo,
                [label]: e.target.value,
              })
            }
          />
        );
      })}

      {Object.keys(vitals).map((label) => {
        return (
          <TextInput
            label={label}
            value={vitals[label]}
            onChange={(e) =>
              setVitals({
                ...vitals,
                [label]: e.target.value,
              })
            }
          />
        );
      })}
    </>
  );
}
