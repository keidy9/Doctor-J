import { useEffect, useState } from 'react';
import { Chip, Flex, Text, TextInput, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  const [patientInfo, setPatientInfo] = useState({
    Name: '',
    Age: '',
    Sex: '',
  });
  const [vitals, setVitals] = useState({
    'BP (ex: 138/84)': '',
    'Temp (ºF)': '',
    'RR (bpm)': '',
    'O2 Stat (%)': '',
    'HR (bpm)': '',
    'Ht (ex: 5\'2")': '',
    'Wt (lbs)': '',
  });
  const [comprehensive, setComprehensive] = useState({
    Constitutional: {
      Constitutional: {
        fever: false,
        chills: false,
        sweats: false,
        'fatigue/malaise': false,
        'significant weight change': false,
        'exercise intolerance': false,
        'generalized body aches': false,
      },
    },
    Head: {
      Head: {
        headaches: false,
        'change in headache pattern': false,
        'facial pain': false,
        'sinus pain': false,
      },
    },
    Eyes: {
      Eyes: {
        'vision change': false,
        'eye pain': false,
        photophobia: false,
        itching: false,
        'red eyes': false,
        'excessive tearing': false,
        'dry eyes': false,
        'foreign body sensation': false,
        discharge: false,
      },
    },
    ENMT: {
      Ears: {
        pain: false,
        'hearing loss': false,
        tinnitus: false,
        discharge: false,
      },
      'Nose/Sinus': {
        'sinus pain': false,
        nosebleeds: false,
        'nasal discharge': false,
        'nasal blockage': false,
        'excessive snoring': false,
      },
      'Mouth/Throat': {
        'sore throat': false,
        'dry mouth': false,
        'bleeding gums': false,
        ulcers: false,
        'dentition problems': false,
        hoarseness: false,
      },
    },
    Lymphatic: {
      Lymphatic: {
        'swollen glands': false,
        'gland tenderness': false,
      },
    },
    Respiratory: {},
    Cardiovascular: {},
    Breast: {},
    Gastrointestinal: {},
    Genitourinary: {},
    Musculoskeletal: {},
    Integumentary: {},
    Neurologic: {},
    Endocrine: {},
    Psychiatric: {},
  });

  // useEffect(() => {
  //   console.log(comprehensive);
  // }, [comprehensive]);

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

      <Title order={1}>Comprehensive</Title>
      {Object.keys(comprehensive).map((group) => {
        return (
          <>
            <Title order={2}>{group}</Title>
            {Object.keys(comprehensive[group]).map((groupSpecific) => {
              return (
                <>
                  <Flex align="center" justify="flex-start" wrap="wrap" gap="md">
                    <Text size="md" fw={500}>
                      {groupSpecific}
                    </Text>

                    <Chip.Group
                      multiple
                      onChange={(symptoms) => {
                        setComprehensive((prevState) => {
                          const newState = prevState;
                          Object.keys(newState[group][groupSpecific]).forEach((symptom) => {
                            newState[group][groupSpecific][symptom] = symptoms.includes(symptom)
                              ? true
                              : false;
                          });
                          return newState;
                        });
                        console.log(comprehensive);
                      }}
                    >
                      {Object.keys(comprehensive[group][groupSpecific]).map((symptom) => {
                        return <Chip value={symptom}>{symptom}</Chip>;
                      })}
                    </Chip.Group>
                  </Flex>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}
