(() => {

    const celsiusTemperatures = [33.6, 12.34];

    const ipServer = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;


    const startTime = new Date().getTime();

    const endTime = new Date().getTime() - startTime;


    // Funciones
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    

    function getSquaresAreaBySide( side: number ) {
        throw new Error('Function not implemented.');
    }


    function printJob() {
        throw new Error('Function not implemented.');
    }

})();