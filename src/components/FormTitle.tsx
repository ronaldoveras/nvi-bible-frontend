import styled from 'styled-components'
import Bar from './Bar';

const FormTitle = () => {

    return(
      <div style={{marginTop: 30}}>
      <Title>
          Holy Text
      </Title> 
      <Bar />
      </div>
       
    );

}

export default FormTitle;

const Title = styled.div`
    margin-left:7%;
`;
