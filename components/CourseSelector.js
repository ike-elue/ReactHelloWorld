import React, {useState} from 'react';
import Course from './Course';
import styles from './CourseList';
import { View } from 'react-native';
import * as c from 'C:/Users/User/Desktop/HelloWorld/utils/course';

const CourseSelector = ({courses}) => {
    const [selected, setSelected] = useState([]);
    
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (
            <Course key={course.id} course={course} 
              isDisabled={c.hasConflict(course, selected)}
              select = {toggle}
              isSelected={selected.includes(course)}
            />
          ))
        }
      </View>
    );
  };

  export default CourseSelector;