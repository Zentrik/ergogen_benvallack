module.exports = {
    nets: {
        GND: 'GND',
        SHIELD: 'SHIELD',
        VBUS: 'VBUS',
        VCC: 'VCC',
        CC1: 'CC1',
        CC2: 'CC2',
        DMIN: 'DMIN',
        DPLUS: 'DPLUS',
        P3: 'P3',
        P4: 'P4'
    },
    params: {
        class: 'USB',
        side: 'F',
        // By placing a model in the path specified below KiCad will show it in the 3D viewer
        model: './3d/USB-C-C168688.step'
    },
    body: p => `
          (module USB-C-12-Pin-MidMount (layer ${p.param.side}.Cu)
          ${p.at /* parametric position */}

          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer ${p.param.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))

          (fp_line (start -4.64 6.66) (end 4.64 6.66) (layer ${p.param.side}.CrtYd) (width 0.15))
          (fp_line (start -4.64 6.66) (end -4.64 0) (layer ${p.param.side}.CrtYd) (width 0.15))
          (fp_line (start 4.64 6.66) (end 4.64 0) (layer ${p.param.side}.CrtYd) (width 0.15))

          (pad "A1" smd rect (at 3.225 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.GND.str})
          (pad "A4" smd rect (at 2.45 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.VBUS.str})
          
          ${p.param.side === 'F' ? `
          (pad "B8" smd rect (at 1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask))
          (pad "A5" smd rect (at 1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.CC2.str})
          (pad "B7" smd rect (at 0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.DMIN.str})
          (pad "A6" smd rect (at 0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.DPLUS.str})
          (pad "A7" smd rect (at -0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.DMIN.str})
          (pad "B6" smd rect (at -0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.DPLUS.str})
          (pad "A8" smd rect (at -1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask))
          (pad "B5" smd rect (at -1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers F.Cu F.Paste F.Mask) ${p.net.CC1.str})
          ` : `
          (pad "B5" smd rect (at 1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.CC1.str})
          (pad "A8" smd rect (at 1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask))
          (pad "B6" smd rect (at 0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.DPLUS.str})
          (pad "A7" smd rect (at 0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.DMIN.str})
          (pad "A6" smd rect (at -0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.DPLUS.str})
          (pad "B7" smd rect (at -0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.DMIN.str})
          (pad "A5" smd rect (at -1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask) ${p.net.CC2.str})
          (pad "B8" smd rect (at -1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers B.Cu B.Paste B.Mask))
          `}
            
          (pad "A4" smd rect (at -2.45 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.VBUS.str})
          (pad "A1" smd rect (at -3.225 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.GND.str})
          (pad "S1" thru_hole oval (at 5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.SHIELD.str})
          (pad "S1" thru_hole oval (at -5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.SHIELD.str})
          (pad "S1" thru_hole oval (at -5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.SHIELD.str})
          (pad "S1" thru_hole oval (at 5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.SHIELD.str})
          
          (model ${p.param.model}
                (at (xyz 0 0 0))
                (scale (xyz 1 1 1))
                (rotate (xyz 0 0 180))
            )
          )
     `
}