import {map} from 'rxjs/operators';
import * as moment from 'moment/moment';

export function TransformDate(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value =  function() {
    return originalMethod.apply(this).pipe(
      map((obj) => Object.assign({}, obj, handleDates(obj, 'dnaissance')))
    );
  };
  return descriptor;
}

const isDate = (s) => moment(s, moment.ISO_8601, true).isValid();
const handleDates = (list, prop) => {
  console.log(prop, ':', list);
  return list.map(item => {
    const obj = Object.assign({}, item);
    console.log('id', obj['id']);
    console.group();
    console.log('origin value:', obj[prop]);
    console.log('moment', moment(obj[obj[prop]]).toDate());
    console.log('Date', new Date(obj[prop]).toLocaleDateString());
    console.groupEnd();

   // obj[prop] = new Date(obj[prop]).toLocaleDateString();
/*    console.log(prop, 'obj[prop]', obj[prop]);

    console.log(obj);*/
    return obj;
  });
};

/*
export function stringToDate(obj) {
  return Object.keys(obj)
    .filter((key) => obj[key] && isDate(obj[key]))
    .map((key) => {
      obj[key] = moment(obj[key]).toDate();
    });
}
*/
