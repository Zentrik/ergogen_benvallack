module.exports = {
    nets: {
        r1: 'r1',
        r2: 'r2'
    },
    params: {
        class: 'S', 
	reverse: true
    },
    body: p => {
	    const standard = `
	(module Button_Switch_SMD:SW_SPST_UXCELL (layer F.Cu)
        ${p.at /* parametric position */}
	  (descr "uxcell 3x6x4mm Momentary PCB SMT Surface Mounted Devices Rectangle Push Button SPST Tactile Tact Switch White 20PCS")
	  (tags "Tactile Switch")
	  (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
	  (attr smd)
	  (fp_circle (center 0 0) (end 0.75 0) (layer F.Fab) (width 0.1))

	  (fp_line (start -3.0 1.75) (end -3.0 -1.75) (layer F.Fab) (width 0.1))
	  (fp_line (start 3.0 1.75) (end -3.0 1.75) (layer F.Fab) (width 0.1))
	  (fp_line (start 3.0 -1.75) (end 3.0 1.75) (layer F.Fab) (width 0.1))
	  (fp_line (start -3.0 -1.75) (end 3.0 -1.75) (layer F.Fab) (width 0.1))

	  (fp_line (start -3.5 -2.15) (end -3.5 2.15) (layer F.CrtYd) (width 0.05))
	  (fp_line (start 3.5 -2.15) (end -3.5 -2.15) (layer F.CrtYd) (width 0.05))
	  (fp_line (start 3.5 2.15) (end 3.5 -2.15) (layer F.CrtYd) (width 0.05))
	  (fp_line (start -3.5 2.15) (end 3.5 2.15) (layer F.CrtYd) (width 0.05))
	  (fp_text user %R (at 0 -2.5) (layer F.Fab)
	    (effects (font (size 1 1) (thickness 0.15)))
	  )

	      `
	    function pins(def_neg, def_pos, def_side) {
		  return `
		    ${''/* pins */}
	  (pad 1 smd rect (at ${def_neg}3.5 0 ${p.rot}) (size 1.0 2.0) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.r1.str})
	  (pad 2 smd rect (at ${def_pos}3.5 0 ${p.rot}) (size 1.0 2.0) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.r2.str})
		  `
	    }
	    if(p.param.reverse) {
	      return `
		${standard}
		${pins('-', '', 'B')}
		${pins('', '-', 'F')})
		`
	    } else {
	      return `
		${standard}
		${pins('-', '', 'B')})
		`
	    }
	}
}