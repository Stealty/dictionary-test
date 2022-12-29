import { atom } from 'recoil';

const credentialState = atom({
  key: 'credentials', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export default credentialState;
