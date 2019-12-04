const RPS = require('../src/rps');
const Shape = require('../src/shape')

describe('play', () => {
    describe('player 1 winning scenarios', () => {
        it('should only call p1Wins when player 1 plays rock and player 2 plays scissors', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Rock, Shape.Scissors)
            userInterfaceMock.verifyP1Wins()
        });

        it('should only call p1Wins when player 1 plays paper and player 2 plays rock', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Paper, Shape.Rock)
            userInterfaceMock.verifyP1Wins()
        });

        it('should only call p1Wins when player 1 plays scissors and player 2 plays paper', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Scissors, Shape.Paper)
            userInterfaceMock.verifyP1Wins()
        });
    })

    describe('player 2 winning scenarios', () => {
        it('should only call p2Wins when player 1 plays rock and player 2 plays paper', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Rock, Shape.Paper)
            userInterfaceMock.verifyP2Wins()
        });

        it('should only call p2Wins when player 1 plays paper and player 2 plays scissors', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Paper, Shape.Scissors)
            userInterfaceMock.verifyP2Wins()
        });

        it('should only call p2Wins when player 1 plays scissors and player 2 plays rock', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Scissors, Shape.Rock)
            userInterfaceMock.verifyP2Wins()
        });
    })

    describe('tie scenarios', () => {
        it('should only call tie when player 1 plays rock and player 2 plays rock', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Rock, Shape.Rock)
            userInterfaceMock.verifyTie()
        });

        it('should only call tie when player 1 plays paper and player 2 plays paper', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Paper, Shape.Paper)
            userInterfaceMock.verifyTie()
        });

        it('should only call tie when player 1 plays scissors and player 2 plays scissors', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Scissors, Shape.Scissors)
            userInterfaceMock.verifyTie()
        });
    })


    describe('invalid input', () => {
        it('should only call invalid when player 1 plays sailboat and player 2 plays sailboat', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame('sailboat', 'sailboat')
            userInterfaceMock.verifyInvalid()
        })

        it('should only call invalid when player 1 plays rock and player 2 throws sailboat', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame(Shape.Rock, 'sailboat')
            userInterfaceMock.verifyInvalid()
        })

        it('should only call invalid when player 1 plays sailboat and player 2 throws rock', () => {
            const userInterfaceMock = new UserInterfaceMock();
            const rps = new RPS(userInterfaceMock)
            rps.playGame('sailboat', Shape.Rock)
            userInterfaceMock.verifyInvalid()
        })
    });
});

class UserInterfaceMock {
    p1Wins() {
        this.p1WinsCalled = true
    }

    p2Wins() {
        this.p2WinsCalled = true
    }

    tie() {
        this.tieCalled = true
    }

    invalid() {
        this.invalidCalled = true
    }

    verifyP1Wins() {
        expect(this.p1WinsCalled).toBeTruthy()
        expect(this.p2WinsCalled).toBeFalsy()
        expect(this.tieCalled).toBeFalsy()
        expect(this.invalidCalled).toBeFalsy()
    }

    verifyP2Wins() {
        expect(this.p1WinsCalled).toBeFalsy()
        expect(this.p2WinsCalled).toBeTruthy()
        expect(this.tieCalled).toBeFalsy()
        expect(this.invalidCalled).toBeFalsy()
    }

    verifyTie() {
        expect(this.p1WinsCalled).toBeFalsy()
        expect(this.p2WinsCalled).toBeFalsy()
        expect(this.tieCalled).toBeTruthy()
        expect(this.invalidCalled).toBeFalsy()
    }

    verifyInvalid() {
        expect(this.p1WinsCalled).toBeFalsy()
        expect(this.p2WinsCalled).toBeFalsy()
        expect(this.tieCalled).toBeFalsy()
        expect(this.invalidCalled).toBeTruthy()
    }
}
