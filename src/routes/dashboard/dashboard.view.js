module.exports = async (req, res) => {
    /* const quizData = await axios */
    console.log(req.verifiedUser.user.quizzes)

    res.render('dashboard', { user: req.verifiedUser.user });
}