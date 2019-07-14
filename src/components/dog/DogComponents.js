import styled from 'styled-components';

const youngDogColor = (degreeOfDark = 0) => `rgb(${168 - (168 * (degreeOfDark / 100))},${84 - (84 * (degreeOfDark / 100))},0)`;
const adultDogColor = (degreeOfDark = 0) => `rgb(${168 - (168 * (degreeOfDark / 100))},${104 - (104 * (degreeOfDark / 100))},0)`;
const oldDogColor = (degreeOfDark = 0) => `rgb(${168 - (168 * (degreeOfDark / 100))},${144 - (144 * (degreeOfDark / 100))},0)`;

export const Dog = styled.div`
    position: relative;
    width: 150px;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:20px;
`

export const Head = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50% 50% 60% 60% / 30% 30% 90% 90%;
    background-color: rgb(168,84,0);
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    margin: 0 auto;
    z-index: 5;    
`

export const Tongue = styled.div`
    width: 20%;
    height: 35%;
    background-color: rgb(252,101,101);
    position: absolute;
    bottom: -18%; // Down: -15px / Up: 25%
    left: 40%;
    border-radius: 50% 50% 50% 50% / 80% 80% 20% 20%;    
`

export const Ear = styled.div`
    position: absolute;
    width: 20%;
    height: 30%;
    border-top: 15px solid ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    top: -15%;
`

export const LeftEar = styled(Ear)`    
    border-right: 20px solid ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    left: -15%;
    border-radius: 15% 20%;
    transform: rotate(-20deg);
`

export const RightEar = styled(Ear)`
    border-left: 20px solid ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    right: -15%;
    border-radius: 20% 15%;
    transform: ${props => {
        if (props.age === 'adult') {
            return 'rotate(50deg)';
        }
        if (props.age === 'old') {
            return 'rotate(55deg)';
        }
        return 'rotate(20deg)';
    }};
`

export const Eye = styled.div`
    display: block;
    background-color: #fff;
    width: 35%;
    height: 60%;
    position: absolute;
    border-radius: 50%;
    top: 15%;
`

export const LeftEye = styled(Eye)`
    right: 52%;
    border-radius: 50% 50% 10% 90% / 30% 50% 50% 70%;
`

export const RightEye = styled(Eye)`
    left: 52%;
    border-radius: 50% 50% 90% 10% / 50% 30% 70% 50%;
`

export const Pupil = styled.div`
    display: block;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle at 20% 20%, white 0%, black 20%);
    border-radius: 50%;
    position: relative;
    margin: ${props => {
        if (props.age === 'adult') {
            return '25px auto';
        }
        if (props.age === 'old') {
            return '30px auto';
        }
        return '20px auto';
    }};
`

export const Nose = styled.div`
    display: block;
    background-color: black;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    position: absolute;
    left: 40%;
    top: 45%;
`

export const Cheek = styled.div`
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    background-color: rgb(191,153,36);
    background: radial-gradient(circle at 50% 20%, #bf9924 60%, #997a1d);
    top: ${props => {
        if (props.age === 'old') {
            return '60%';
        }
        if (props.age === 'adult') {
            return '55%';
        }
        return '50%';
    }};
`

export const LeftCheek = styled(Cheek)`
    right: 50%;
    border-radius: 40px 20px 40px 30px / 40px 20px 30px 30px;
`

export const RightCheek = styled(Cheek)`
    left: 50%;
    border-radius: 20px 40px 30px 40px / 20px 40px 30px 30px;
`

export const Body = styled.div`
    position: relative;
    width: 100px;
    height: 150px;
    position: relative;
    margin: -3px auto 0 auto;
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    border-radius: 45% 45% 20% 20% / 70% 70% 30% 30%;
`

export const InnerBody = styled.div`
    position: absolute;
    width: 70%;
    height: 80%;
    background-color: #bf9924;
    left: 15%;
    bottom: 0;
    border-radius: 45% 45% 20% 20% / 70% 70% 30% 30%;
`

export const HindLeg = styled.div`
    width: 40px;
    height: 90px;
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor(10);
        }
        if (props.age === 'old') {
            return oldDogColor(10);
        }
        return youngDogColor(10);
    }};
    z-index: -1;
    position: absolute;
    bottom: 0;
`

export const HindPaw = styled.div`
    width: 50px;
    height: 20px;
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor(10);
        }
        if (props.age === 'old') {
            return oldDogColor(10);
        }
        return youngDogColor(10);
    }};
    position: absolute;
    bottom: 0;
`

export const LeftHindPaw = styled(HindPaw)`
    right: 0;
    border-radius: 30% 70% 0 5% / 90% 60% 0 5%;
    &:after {
        content: "";
        height: 70%;
        width: 20%;
        position: absolute;
        bottom: 0;
        left: 15%;
        border-left: 4px solid ${props => {
        if (props.age === 'adult') {
            return adultDogColor(20);
        }
        if (props.age === 'old') {
            return oldDogColor(20);
        }
        return youngDogColor(20);
    }};
        border-radius: 70% 0 0 0 / 100% 0 0 0;
    }
`

export const RightHindPaw = styled(HindPaw)`
    left: 0;
    border-radius: 70% 30% 5% 0 / 90% 60% 5% 0;
    &:after {
        content: "";
        height: 70%;
        width: 20%;
        position: absolute;
        bottom: 0;
        right: 15%;
        border-right: 4px solid ${props => {
        if (props.age === 'adult') {
            return adultDogColor(20);
        }
        if (props.age === 'old') {
            return oldDogColor(20);
        }
        return youngDogColor(20);
    }};
        border-radius: 0 70% 0 0 / 0 100% 0 0;
    }
`

export const LeftHindLeg = styled(HindLeg)`
    left: -20px;
    border-radius: 30% 70% 10% 80% / 30% 60% 30% 70%;
`

export const RightHindLeg = styled(HindLeg)`
    right: -20px;
    border-radius: 70% 30% 80% 10% / 60% 30% 70% 30%;
`

export const FrontLeg = styled.div`
    width: 22%;
    height: 85%;
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor();
        }
        if (props.age === 'old') {
            return oldDogColor();
        }
        return youngDogColor();
    }};
    position: absolute;
`

export const LeftFrontLeg = styled(FrontLeg)`
    left: 12%;
    bottom: 0;
    border-radius: 90% 10% 40% 20% / 30% 10% 90% 70%;
    transform: rotate(-14deg);
`

export const RightFrontLeg = styled(FrontLeg)`
    right: 12%;
    bottom: 0;
    border-radius: 10% 90% 20% 40% / 10% 30% 70% 90%;
    transform: rotate(14deg);
`

export const FrontPaw = styled.div`
    width: 100%;
    height: 12%;
    background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor(10);
        }
        if (props.age === 'old') {
            return oldDogColor(10);
        }
        return youngDogColor(10);
    }};
    border-radius: 40% 40% 0 0;
    position: absolute;
`

export const LeftFrontPaw = styled(FrontPaw)`
    bottom: -2%;
    left: -10%;
    transform: rotate(14deg);
    &:after {
        content: "";
        height: 70%;
        width: 20%;
        position: absolute;
        bottom: 0;
        left: 40%;
        background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor(20);
        }
        if (props.age === 'old') {
            return oldDogColor(20);
        }
        return youngDogColor(20);
    }};
        border-radius: 50% 50% 0 0;
    }
`

export const RightFrontPaw = styled(FrontPaw)`
    bottom: -2%;
    right: -10%;
    transform: rotate(-14deg);
    &:after {
        content: "";
        height: 70%;
        width: 20%;
        position: absolute;
        bottom: 0;
        right: 40%;
        background-color: ${props => {
        if (props.age === 'adult') {
            return adultDogColor(20);
        }
        if (props.age === 'old') {
            return oldDogColor(20);
        }
        return youngDogColor(20);
    }};
        border-radius: 50% 50% 0 0;
    }
`