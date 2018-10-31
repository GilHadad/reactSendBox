const height = 90;
const colorActive = '#333333';
const colorNotActive = '#8c8c8c';

export function getDividerStyle(active) {

}

export function getStepStyles(active) {
    let borderType = 'dotted';
    let borderColor = colorNotActive;
    let borderSize = '1px'
    if (active) {
        borderType = 'solid';
        borderColor = colorActive;
    }

    const border = `${borderSize} ${borderType} ${borderColor}`
    const stepClass = {
        step: {
            height: height,
            width: height,
            border: border,
            borderRadius: '100%',

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            cursor: active? 'pointer': ' initial'
        },
        connector: {
            borderTop: border,
        },
    }
    return stepClass
}

export function getSelectedStepStyles(color) {
    return {
        circleRight: {
            float: 'left',
            height: '100%',
            width: `${height / 2}px`,
            backgroundColor: color,
            borderBottomLeftRadius: height,
            borderTopLeftRadius: height,
            border: `1px solid ${color}`
        },

        circleLeft: {
            float: 'left',
            height: '100%',
            width: `${height / 2}px`,
            backgroundColor: color,
            borderBottomRightRadius: height,
            borderTopRightRadius: height,
            border: `1px solid ${color}`
        },

        rectangle: {
            float: 'left',
            height: '100%',
            backgroundColor: color,
            width: `${height * 2}px`,

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: `1px solid ${color}`
        },
        step: {

        }

    }
}

export default {


    shape: {
        height: `${height}px`,
        width: 'fit-content',
        // display: 'flex',
    },

    divider: {
        height: `${height / 2}px`,
        borderBottom: '1px dotted red',
        display: 'flex',


        // width: `${height}px`,
    },
    dividerContainer: {
        height: `${height}px`,
        borderBottom: '1px dotted red',
        float: 'left',
    },

    objContanier: {
        width: 'fit-content',
    }


}