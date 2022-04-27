
import tambourine from '../tracks/_tambourine_shake_higher.mp3';
import vocal from '../tracks/B VOC.mp3';
import all from '../tracks/ALL TRACK.mp3';
import drums from '../tracks/DRUMS.mp3';
import hehe from '../tracks/HE HE VOC.mp3';
import high from '../tracks/HIGH VOC.mp3';
import jibbrish from '../tracks/JIBRISH.mp3';
import lead from '../tracks/LEAD 1.mp3';
import uuho from '../tracks/UUHO VOC.mp3';


export const TRACKS = [
  { audio: new Audio(tambourine), name: 'tambourine' },
  { audio: new Audio(vocal), name: 'vocal' },
  { audio: new Audio(all), name: 'all' },
  { audio: new Audio(drums), name: 'drums' },
  { audio: new Audio(hehe), name: 'hehe' },
  { audio: new Audio(high), name: 'high' },
  { audio: new Audio(jibbrish), name: 'jibbrish' },
  { audio: new Audio(lead), name: 'lead' },
  { audio: new Audio(uuho), name: 'uuho' },
];