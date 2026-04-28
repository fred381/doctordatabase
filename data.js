/* ============================================
   THE LITTLE GREEN BOOK — Data
   Add new advisers or categories here.
   ============================================ */

const CATEGORIES = [
  { id: 'all', label: 'All Advisers' },
  { id: 'private-gps', label: 'Private GPs' },
  { id: 'geriatricians', label: 'Consultant Physicians & Geriatricians' },
  { id: 'neurology-memory', label: 'Neurology & Memory Specialists' },
];

const ADVISERS = [
  {
    name: 'Dr Simon Moore',
    organisation: 'Moore Medical Practice, Chelsea',
    category: 'private-gps',
    specialty: 'Private GP',
    bio: 'Founder of Moore Medical Practice and a private GP since 1987, Dr Simon Moore leads one of London\'s most established private practices. His team is renowned for unhurried, family-style care and offers 24-hour cover and same-day home visits — invaluable when supporting older patients at home.',
    extendedBio: 'Dr Simon Moore qualified from Guy\'s Hospital, University of London in 1981 and has been in private practice in Chelsea since 1987. From 272 King\'s Road he and his team have built one of the largest and most respected private GP practices in London, caring for several generations of the same families. His practice is particularly well suited to elderly clients: doctors are available around the clock, home visits can be arranged at short notice, and the team has long experience of co-ordinating complex care across consultants, carers and family members. Patients value his calm authority, his thoroughness and his willingness to take whatever time is needed — qualities that matter most when navigating later-life health.',
  },
  {
    name: 'Dr Toby Dean',
    organisation: 'The Sloane Street Surgery, Belgravia',
    category: 'private-gps',
    specialty: 'Private GP',
    bio: 'A thoughtful, attentive private GP at The Sloane Street Surgery, Dr Toby Dean trained extensively in care of the elderly and offers the kind of unhurried, continuity-led general practice that older patients and their families rely on, including 24/7 access and home visits across Chelsea, Knightsbridge and Belgravia.',
    extendedBio: 'Dr Toby Dean (BA Hons, MB BS, MRCGP) graduated from the University of Nottingham in 2009 and trained across acute medicine, care of the elderly, psychiatry and general surgery before joining The Sloane Street Surgery in Belgravia. He is known for his bespoke, attentive consulting style and his commitment to continuity of care — seeing patients through long-term conditions rather than one-off appointments. Toby has a particular interest in chronic disease management and disease prevention, both central to looking after older adults well. The surgery offers 24/7 access, discreet home visits and rapid referral to leading specialists, making it a natural fit for elderly clients who need joined-up, responsive primary care close to home.',
  },
  {
    name: 'Dr Michael Criswell',
    organisation: 'The Criswell Practice, Sloane Square',
    category: 'private-gps',
    specialty: 'Private GP',
    bio: 'Dr Michael Criswell leads The Criswell Practice in Sloane Square, a fifth-generation family GP practice that has been caring for Chelsea families since 1991. With 35+ years of experience and a deliberately small team, he offers older patients the unhurried, deeply personal continuity of care that larger clinics cannot match.',
    extendedBio: 'Dr Michael Criswell (BSc, MBChB, MRCGP, DCCH, DRCOG) runs The Criswell Practice at 6b Sloane Square alongside his son Dr Theo Criswell — continuing five generations of Criswell GPs. The practice has cared for Chelsea families since 1991 and is rated Good by the CQC across every domain. By design it remains a small team, allowing older patients the rare luxury of seeing the same doctor every visit and of building a relationship that spans years rather than appointments. The practice has long-standing links with the UK\'s leading specialists, ensuring rapid onward referral when needed, and is particularly experienced in managing the multiple, overlapping conditions that often present in later life.',
  },
  {
    name: 'Dr Tim Ladbrooke',
    organisation: 'Courtfield Private Practice, South Kensington',
    category: 'private-gps',
    specialty: 'Private GP',
    bio: 'Founder of Courtfield Private Practice in South Kensington, Dr Tim Ladbrooke is a Fellow of the Royal College of General Practitioners with over 40 years\' experience. His family-style practice cares for patients from the newborn to the very elderly, and he is widely praised by families of older patients for the exceptional, personal care they receive.',
    extendedBio: 'Dr Tim Ladbrooke qualified at Cambridge University and Westminster Medical School in 1982 and founded Courtfield Private Practice in South Kensington more than 25 years ago with his wife, Dr Jill Harling. He was made a Fellow of the Royal College of General Practitioners in 2018 in recognition of his outstanding contribution to general practice. Courtfield is, by design, a family practice — and Tim is particularly trusted by the families of elderly patients, who consistently describe his care as truly exceptional. He combines deep clinical experience with genuine warmth, taking the time to understand each patient\'s wider circumstances and co-ordinating with families and care teams to ensure older clients are looked after with both rigour and kindness.',
  },
  {
    name: 'Dr Prashanth Reddy',
    organisation: 'King\'s College Hospital & London Bridge Hospital',
    category: 'geriatricians',
    specialty: 'Consultant Neurogeriatrician',
    bio: 'A Consultant Neurogeriatrician with more than 15 years\' specialist experience, Dr Prashanth Reddy is one of the UK\'s leading clinicians for elderly patients with complex neurological conditions — Parkinson\'s, dementia, stroke and frailty — and founded the UK\'s first integrated neuro-geriatric clinic at King\'s College Hospital.',
    extendedBio: 'Dr Prashanth Reddy (MBBS, FRCP, MD Res) is a highly acclaimed Consultant in Geriatric and General Medicine with a special interest in neurogeriatrics. He is the lead consultant for the Acute Health and Ageing Unit at King\'s College Hospital and consults privately at London Bridge Hospital, the Guthrie Clinic at King\'s, and The Lister Hospital. His clinical expertise covers Parkinson\'s disease, dementia, stroke, restless leg syndrome, dystonia and comprehensive geriatric assessment, and he has extensive experience of advanced Parkinson\'s therapies including Apomorphine, Duodopa and DBS. Dr Reddy founded the UK\'s first integrated neuro-geriatric clinic, bringing Parkinson\'s, dementia and stroke care under a single roof — a model designed expressly around the realities of how older patients actually present. He teaches at King\'s College London and is widely published in movement disorders.',
  },
  {
    name: 'Dr Inaki Bovill',
    organisation: 'Chelsea & Westminster Hospital',
    category: 'geriatricians',
    specialty: 'Consultant Physician & Geriatrician',
    bio: 'A Consultant in General and Geriatric Medicine at Chelsea & Westminster Hospital since 2004, Dr Iñaki Bovill is particularly experienced in managing complex elderly patients — including polypharmacy review and pre-operative optimisation for older adults facing surgery.',
    extendedBio: 'Dr Iñaki Bovill (BSc, MBBS, FRCP) qualified from Charing Cross and Westminster Medical School in 1993 and trained in the North West Thames region at St Mary\'s and Chelsea & Westminster, where he has been a consultant since 2004. He consults privately on Chelsea Bridge Road and at Battersea Power Station. His clinical interests cover the full breadth of elderly and general medicine, with particular strength in the two areas families most often need help with: polypharmacy — safely reviewing and rationalising the long medication lists older patients accumulate — and peri-operative medicine, optimising frail older adults before orthopaedic and general surgery to reduce complications and speed recovery. Patients describe him as meticulous, calm and unhurried.',
  },
  {
    name: 'Dr Shahbaz Roshan-Zamir',
    organisation: 'Guy\'s & St Thomas\' Hospital',
    category: 'geriatricians',
    specialty: 'Consultant Physician & Geriatrician',
    bio: 'Consultant Physician and Geriatrician at Guy\'s & St Thomas\', Dr Shahbaz Roshan-Zamir is a national authority on heart disease in older adults — an accredited echocardiographer who founded the Cardiology for Older Persons Service (COPS) and helps run the hospital\'s Frailty Service.',
    extendedBio: 'Dr Shahbaz Roshan-Zamir (MRCP, MBBS, BSc) qualified from Guy\'s, King\'s & St Thomas\' Medical School in 2006 and was appointed Consultant Physician and Geriatrician in the Department of Ageing & Health at Guy\'s and St Thomas\' in 2017. He sits at the unusual and valuable intersection of geriatric medicine and cardiology: an accredited echocardiographer with the British Society of Echocardiography, he developed the trust\'s Cardiology for Older Persons Service (COPS), supporting the Heart Failure and TAVI teams in tailoring cardiac care to older, frailer patients. He also helps lead the Frailty Service at St Thomas\' and runs weekly outpatient clinics in heart failure and comprehensive geriatric assessment. He consults privately at 53 Parkside and is a natural choice when an elderly relative needs a doctor who can hold both the cardiac picture and the wider picture of ageing in mind at once.',
  },
  {
    name: 'Dr Mark Kinirons',
    organisation: 'King Edward VII\'s Hospital & Guy\'s and St Thomas\'',
    category: 'geriatricians',
    specialty: 'Consultant Physician & Geriatrician',
    bio: 'Consultant Physician in Ageing and Health at Guy\'s and St Thomas\' and consultant at King Edward VII\'s Hospital, Dr Mark Kinirons is triple-accredited in general medicine, geriatric medicine and clinical pharmacology — exceptionally well placed to manage the falls, memory problems, multiple medications and pre-operative reviews that define later-life care.',
    extendedBio: 'Dr Mark Kinirons is a Consultant Physician in the Department of Ageing and Health at Guy\'s and St Thomas\' and consults privately at King Edward VII\'s Hospital. He is unusual in being an accredited specialist in three relevant disciplines — general medicine, geriatric medicine and clinical pharmacology — having completed his postgraduate training at King\'s College Hospital, the Middlesex and the Whittington, and a research MD in drug metabolism as a Fellow at Vanderbilt University Medical School. His clinical practice covers falls, dementia, osteoporosis and general medical problems in older adults, with particular expertise in successful ageing, memory problems, multiple-medication reviews, pre-operative assessment and heart failure in old age. His academic interests in quality and safety, clinical pharmacology of ageing and ethics in healthcare make him a thoughtful, careful choice for families seeking truly senior input on a complex case.',
  },
  {
    name: 'Dr Emer MacSweeney',
    organisation: 'Re:Cognition Health',
    category: 'neurology-memory',
    specialty: 'CEO & Consultant Neuroradiologist — Memory & Dementia',
    bio: 'CEO, Medical Director and co-founder of Re:Cognition Health, Dr Emer MacSweeney is one of the UK\'s foremost authorities on the early diagnosis and treatment of Alzheimer\'s disease, leading clinical trials for the new generation of disease-modifying dementia drugs now reaching patients.',
    extendedBio: 'Dr Emer MacSweeney (BSc Hons, MRCP, FRCR) is a Consultant Neuroradiologist and the CEO and Medical Director of Re:Cognition Health, the specialist brain health service she co-founded in 2011. She trained in neuroradiology at the National Hospital for Neurology and Neurosurgery, Queen Square, and held a scholarship at Harvard. Re:Cognition Health has clinics in London, Guildford, Plymouth, Birmingham and Fairfax (USA) and has been a global leader in the trials of new monoclonal-antibody treatments for Alzheimer\'s — including lecanemab (Leqembi) and donanemab (Kisunla) — which she now offers to suitable patients. For families worried about a parent\'s memory, she offers exactly the right combination: rapid, advanced imaging-led diagnosis and direct access to the most up-to-date treatments available. She was awarded KPMG Entrepreneur of the Year in 2016.',
  },
  {
    name: 'Dr John Janssen',
    organisation: 'Chelsea and Westminster Hospital & The Lister',
    category: 'neurology-memory',
    specialty: 'Consultant Neurologist — Memory & Cognition',
    bio: 'Consultant Neurologist at Chelsea and Westminster, Royal Brompton and Charing Cross hospitals since 2005, Dr John Janssen specialises in memory disorders, Alzheimer\'s disease, cognitive impairment and stroke — the neurological conditions that most often confront older patients and their families.',
    extendedBio: 'Dr John Janssen qualified from Charing Cross and Westminster Medical School and trained as a neurologist at the National Hospital for Neurology and Neurosurgery and the Royal Free Hospital. He was a Research Fellow in the Dementia Research Group and was awarded an MD by the Institute of Neurology, University of London. He has been a consultant neurologist at Chelsea and Westminster, Royal Brompton and Charing Cross since 2005, and consults privately at HCA\'s Lister Hospital Chelsea Outpatient Centre and Chiswick Medical Centre. His clinical focus on memory disorders, Alzheimer\'s, cognitive impairment, TIA and stroke maps directly onto the issues most often raised by families of older patients, and he prides himself on a personal, accessible private service that allows time for both patient and family.',
  },
  {
    name: 'Dr Dominic Paviour',
    organisation: 'St George\'s, The London Clinic & Harley Street',
    category: 'neurology-memory',
    specialty: 'Consultant Neurologist — Movement, Dementia & Dizziness',
    bio: 'Medical-school gold medallist and Consultant Neurologist at St George\'s, Dr Dominic Paviour assesses and manages a broad range of neurological conditions of older age — Parkinson\'s, dementia and neurodegenerative disease, stroke, and the dizziness and balance problems that so often lead to falls.',
    extendedBio: 'Dr Dominic Paviour graduated in 1998, winning his medical school Gold Medal, and trained in neurology in Oxford and London at the National Hospital for Neurology and Neurosurgery, King\'s College Hospital and the Atkinson Morley Neuroscience Centre. He is a Consultant Neurologist and Honorary Senior Lecturer at St George\'s and at Epsom and St Helier, and consults privately in Wimbledon, Harley Street and Chelsea, including at The London Clinic. His expertise covers Parkinson\'s disease, multiple sclerosis, stroke, epilepsy, dementia and neurodegenerative disease, and he has a particular interest in dizziness and vestibular disorders — a frequent and under-investigated cause of falls in older adults. His thoroughness, clarity of explanation and willingness to take time over difficult diagnoses make him especially well suited to elderly patients and their families.',
  },
];
