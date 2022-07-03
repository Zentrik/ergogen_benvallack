module.exports = {
    nets: {
        pos: 'pos',
        neg: 'neg'
    },
    params: {
        class: 'PAD' // for Button
    },
    body: p => `
    
    (module lib:bat2p54 (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
	  (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
	  (pad 1 thru_hole circle (at 0 -1.27 ${p.rot}) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.net.pos.str}) 
	  (pad 2 thru_hole circle (at 0 1.27 ${p.rot}) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.net.neg.str})
     )

    `
}
