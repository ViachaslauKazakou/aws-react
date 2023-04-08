// import logo from '../logo.svg';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
    return(
        <header className="App-header">
          <h1>Welcome to learn Easy!</h1>
{/*             <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              Find you mentor!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Easy
            </a>
            <a href="https://7p3nq27bvg.execute-api.us-east-1.amazonaws.com/beta/base">Press me</a>
            <a href="https://7p3nq27bvg.execute-api.us-east-1.amazonaws.com/beta/getList"> List of tasks </a>
            <div>{props.test}</div>
            <Stack direction="horizontal" gap={2}>
              <Button as="a" variant="primary">
                Button as link
              </Button>
              <Button as="a" variant="success">
                Button as link
              </Button>
            </Stack>
      </header>
    );
}

export default Header;
