import "@testing-library/jest-dom/extend-expect";
import 'jest-canvas-mock';

import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

