import React from 'react';
import PropTypes from 'prop-types';
import {
    Dog, Head, Tongue, LeftEar,
    RightEar, LeftEye, RightEye, Pupil,
    Nose, LeftCheek, RightCheek, Body,
    InnerBody, LeftHindLeg, LeftHindPaw, RightHindLeg,
    RightHindPaw, LeftFrontLeg, RightFrontLeg, LeftFrontPaw,
    RightFrontPaw
} from './DogComponents';
import dogsConfig from '../../config/dogsConfig.json';

const avaliableAges = dogsConfig.avaliableAges;

function _Dog(props) {
    const age = avaliableAges.includes(props.age) ? props.age : avaliableAges[0];
    return (
        <div>
            <Dog>
                <Head onClick={props.onHeadClick} age={age}>
                    <Tongue />
                    <LeftEar age={age} />
                    <RightEar age={age} />
                    <LeftEye>
                        <Pupil age={age} />
                    </LeftEye>
                    <RightEye>
                        <Pupil age={age} />
                    </RightEye>
                    <Nose />
                    <LeftCheek age={age} />
                    <RightCheek age={age} />
                </Head>
                <Body onClick={props.onBodyClick} age={age}>
                    <InnerBody />
                    <LeftHindLeg age={age}>
                        <LeftHindPaw age={age} />
                    </LeftHindLeg>
                    <RightHindLeg age={age}>
                        <RightHindPaw age={age} />
                    </RightHindLeg>
                    <LeftFrontLeg age={age}>
                        <LeftFrontPaw age={age} />
                    </LeftFrontLeg>
                    <RightFrontLeg age={age}>
                        <RightFrontPaw age={age} />
                    </RightFrontLeg>
                </Body>
            </Dog>
        </div>
    );
}

_Dog.propTypes = {
    age: PropTypes.oneOf(avaliableAges).isRequired
};

export default _Dog;