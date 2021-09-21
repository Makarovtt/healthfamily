import styled from 'styled-components';

function Button({ children, onClick, description, width, animate = true, type }) {
    return (
        <Container>
            <BackGround
                width={width}
                onClick={onClick}
                animate={animate}
                type={type}>

                {children}
            </BackGround>
            {description && <Description>
                <i>
                    <svg
                        width="89px" height="30px">
                        <path fillRule="evenodd" stroke="rgb(41, 41, 41)" strokeWidth="2px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                            d="M2.032,17.184 C2.032,17.184 47.371,44.922 85.202,1.038 " />
                    </svg>
                </i>
                <p>{description}</p>
            </Description>}
        </Container>

    )
}

export default Button;



const Description = styled.div`
    user-select: none;
    position: absolute;
    display: flex;
    right: -280px;
    bottom: -45px;

    p {
        max-width: 240px;
        font-weight: 800;
        position: relative;
        top: -50px;
        left: -10px;
    }
`;

const Container = styled.div`
    position: relative;
    width: fit-content;
`;

const BackGround = styled.button`
    
    background: var(--gradient-active);
    border: none;
    border-radius: 30px;
    color: var(--color-button);
    font-weight: 900;
    padding: 16px 30px;
    text-shadow: 0.14px 1.995px 0px rgba(26, 53, 126, 0.26);
    letter-spacing: 0.02em;
    transition: .3s;
    cursor: pointer;

    :hover {
        background: var(--gradient-active-hover);
    }
`;
