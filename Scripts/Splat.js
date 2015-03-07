var Splat = function () {

    return {
        ///asdm alslasjr
        vAlign: function vAlign($imgOrDivToReSize, $imgOrDivToFindDimensions, dblScaleOfResize, cb) {

            try {
                dblScaleOfResize = typeof dblScaleOfResize !== 'undefined' ? dblScaleOfResize : 1;
                var h = $imgOrDivToFindDimensions.height() * dblScaleOfResize;
                $imgOrDivToReSize.css('height', h).css('vertical-align', 'middle').css('display', 'table-cell').css('width', '1000');

                cb(true);
            } catch (err) {
                cb(false);
            }

        }
    };

};
