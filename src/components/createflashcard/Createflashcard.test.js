import { render, screen } from '@testing-library/react';
import Createflashcard from '../createflashcard/Createflashcard.js';

// A Test Case [Pass / Faill]
it('renders Add more dynamic input function', () => {
  // Specify our test.
  // Step 1: make sure component is rendered.
  render(<Createflashcard />);
  // Step 2: get element
  const AddmoreInput = screen.getByText(/Add more/i);
  // Step 3: verify result.
  expect(AddmoreInput).toBeInTheDocument();
});

it('should take a snapshot', () => {
  // Object destructuring
  const {asFragment} = render(<Createflashcard />);
  expect(asFragment(<Createflashcard />)).toMatchSnapshot();
});
//asFragment is a function which returns documentfragments 

test('groupname input should be rendered', ()=>{
  render(<Createflashcard />);
  const userInput = screen.getByPlaceholderText(/enter groupname/i);
  expect(userInput).toBeInTheDocument();
});

test('description input should be rendered', ()=>{
  render(<Createflashcard />);
  const userInput = screen.getByPlaceholderText(/Describe the roles,responsibility,skills required for the job and help candidate understand the role better./i);
  expect(userInput).toBeInTheDocument();
});

test('term input should be rendered', ()=>{
  render(<Createflashcard />);
  const userInput = screen.getByPlaceholderText(/enter term/i);
  expect(userInput).toBeInTheDocument();
});

test('term defination input should be rendered', ()=>{
  render(<Createflashcard />);
  const userInput = screen.getByPlaceholderText(/enter defination/i);
  expect(userInput).toBeInTheDocument();
});
