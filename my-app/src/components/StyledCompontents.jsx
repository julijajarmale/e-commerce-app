import styled from 'styled-components'

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export default Wrapper