import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-date-mock';

configure({ adapter: new Adapter() });
