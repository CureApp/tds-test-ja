module.exports = {

    /**
    質問一覧を返す

    @method getQuestions
    @return {Array(String)}
    */
    getQuestions: function() {

        return [
            '自分が吸うつもりよりも、ずっと多くタバコを吸ってしまうことがありましたか。',
            '禁煙や本数を減らそうと試みて、できなかったことがありましたか。',
            '禁煙したり本数を減らそうとしたときに、タバコがほしくてほしくてたまらなくなることがありましたか。',
            '禁煙したり本数を減らしたときに、次のどれかがありましたか。',
            '上の症状を消すために、またタバコを吸い始めることがありましたか。',
            '重い病気にかかったときに、タバコはよくないとわかっているのに吸うことがありましたか。',
            'タバコのために自分に健康問題が起きているとわかっていても、吸うことがありましたか。',
            'タバコのために自分に精神的問題*が起きていると分かっていても、吸うことがありましたか。',
            '自分はタバコに依存していると感じることがありましたか。',
            'タバコが吸えないような仕事やつきあいを避けることが何度かありましたか。',
        ];
   },

    /**
    indexで与えられた質問の選択肢を返す

    @method getChoices
    @param {Number} qsIndex 質問票のインデックス 0, 1, 2, ...
    @return {Array(String)}
    */
    getChoices: function(qsIndex) {

        return ['はい', 'いいえ'];

    },


    /**
    indexで与えられた選択肢の配列から、点数を計算する
    具体的には 与えられた配列の "0" の数を数える

    @method calculate
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Number} 点数
    */
    calculate: function(answerIndexes) {

        return answerIndexes.filter(function(qsIndex) {

            return qsIndex == 0

        }).length;
    },


    /**
    Q4の「どれか」の症状リストを取得

    @method getQ4Symptoms
    @return {Array(String)} 症状のリスト
    */
    getQ4Symptoms: function() {

        return [
            'イライラ',
            '眠気',
            '神経質',
            '胃のむかつき',
            '落ち着かない',
            '脈が遅い',
            '集中しにくい',
            '手のふるえ',
            'ゆううつ',
            '頭痛',
            '食欲または体重増加'
        ];
    },

    /**
    Q8の「精神的問題」を詳しく解説したもの
    精神的問題 の後ろには"*" 印 が付いている
    そちらは状況に合わせて適宜変更ください

    @method getQ8Supplement
    @return {Array(String)} 症状のリスト
    */
    getQ8Supplement: function() {
        return '禁煙や本数を減らした時に出現する離脱症状（いわゆる禁断症状）ではなく、喫煙することによって神経質になったり、不安や抑うつなどの症状が出現している状態。'
    }
};

