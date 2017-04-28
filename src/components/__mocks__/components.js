export const mockStatus = [
    { id: 1, user: 'Elton', text: 'nothing interesting' },
    { id: 2, user: 'Elton', text: 'status updated' },
    { id: 3, user: 'Elton', text: 'my status' },
    { id: 4, user: 'Vinicius', text: 'other status' }
];

export const mockFriends = [
    { id: 1, user: 'Elton', image: 'elton.png', favorite: true },
    { id: 2, user: 'Vinicius', image: 'vinicius.png', favorite: false },
    { id: 3, user: '', image: 'desconhecido.png', favorite: false }
];

export const eventMock = {
    target: {value: 'my new value'},
    stopPropagation: () => true,
    stopImmediatePropagation: () => true,
    preventDefault: () => true,
    currentTarget: {
        getBoundingClientRect: () => ({
            width: '120px',
            height: '120px',
            top: '40px',
            left: '40px'
        })
    }
};

export const window = {
    location: { pathname: '/' },
    INITIAL_STATE: {
        title: 'My title app',
        subtitle: 'My monster subtitle',
        user: {
            name: 'renato',
            friends: mockFriends,
            feed: {status: mockStatus},
            image: 'user.png'
        }
    }
};
