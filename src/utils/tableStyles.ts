const styles = {
    headRow: {
        style: {
            backgroundColor: 'rgba(13,110,253,1)'
        }
    },
    headCells: {
        style: {
            color: 'rgba(234, 234, 241, 1)',
            fontWeight: 700,
            fontSize: '15px'
        }
    },
    rows: {
        style: {
            fontSize: '15px'
        },
        highlightOnHoverStyle: {
            backgroundColor: 'rgba(13,110,253,0.2)'
        }
    },
    pagination: {
        pageButtonsStyle: {
            cursor: 'pointer',
            '&:hover:not(:disabled)': {
                backgroundColor: 'rgba(13,110,253,0.3)'
            }
        }
    }
};

export default styles;