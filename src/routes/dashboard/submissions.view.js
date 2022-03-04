module.exports = async (req, res) => {
    /* const quizData = await axios */
    console.log(req.verifiedUser.user.submissions[0])

    res.render('submissions', { user: req.verifiedUser.user });
}