import AppBarHeader from '../components/AppBarHeader';
import AppContainer from '../components/AppContainer';

const AppLayout = () => {
    const heading = {
        marginTop: '50px',
        paddingLeft: '80px',
        fontSize: '72px',
        width: '730px',
    };

    return (
        // <AppBarHeader>
        <>
            <h1 style={heading}>Even more reasons to go Pro.</h1>

            <AppContainer />
        </>

        // </AppBarHeader>
    );
};

export default AppLayout;
