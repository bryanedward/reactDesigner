import styled from 'styled-components';


const StylePlayListItems = styled.div`

padding: 0 36px;
overflow-y: auto;
max-height: 500px;
height: 28vw;

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


`;

export default StylePlayListItems;