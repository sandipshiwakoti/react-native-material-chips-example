import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Delete = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      width="14"
      height="14"
      {...props}>
      <Path d="M11.5-.031c-1.957 0-3.531 1.625-3.531 3.594V4H4c-.55 0-1 .45-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.55-.45-1-1-1h-3.969v-.438c0-1.968-1.574-3.593-3.531-3.593zm0 2.062h3c.805 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.874.664-1.53 1.469-1.53zM6 8h5.125c.125.012.246.031.375.031h3c.129 0 .25-.02.375-.031H20v15c0 .563-.438 1-1 1H7c-.563 0-1-.438-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z" />
    </Svg>
  );
};

export default Delete;
