import React, {useState} from 'react';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { ScrollView } from 'react-native';
import * as c from '../utils/course';

const termMapping = {F: 'Fall', W: 'Winter', S:'Spring'};
const terms = Object.values(termMapping);

function compare(a, b) {
  var aID = c.getCourseNumber(a);
  var bID = c.getCourseNumber(b);
  if (aID < bID)
     return -1;
  if (aID > bID)
    return 1;
  return 0;
}

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === c.getCourseTerm(course)).sort(compare);

  return(
      <ScrollView>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses} view={view}/>
      </ScrollView>
  );
};

export default CourseList;