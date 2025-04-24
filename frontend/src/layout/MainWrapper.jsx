import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { setUser } from '../utils/auth';

const MainWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handler = async () => {
            setLoading(true);
            await setUser();
            setLoading(false);
        };
        handler();
    }, []);

    return <>{loading ? null : children}</>;
};
MainWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainWrapper;
