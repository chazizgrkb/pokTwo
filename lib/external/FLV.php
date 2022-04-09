<?php

namespace FFMpeg\Format\Video;

/**
 * The FLV video format.
 */
class FLV extends DefaultVideo
{
    /** @var bool */
    private $bframesSupport = true;

    /** @var int */
    private $passes = 2;

    public function __construct($audioCodec = 'libmp3lame', $videoCodec = 'flv')
    {
        $this
            ->setAudioCodec($audioCodec)
            ->setVideoCodec($videoCodec);
    }

    /**
     * {@inheritDoc}
     */
    public function supportBFrames()
    {
        return $this->bframesSupport;
    }

    /**
     * @param $support
     *
     * @return FLV
     */
    public function setBFramesSupport($support)
    {
        $this->bframesSupport = $support;

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getAvailableAudioCodecs()
    {
        return ['copy', 'aac', 'adpcm_swf', 'libvo_aacenc', 'libfaac', 'libmp3lame', 'libfdk_aac', 'libspeex', 'nellymoser', 'pcm_u8', 'pcm_s16be', 'pcm_s16le'];
    }

    /**
     * {@inheritDoc}
     */
    public function getAvailableVideoCodecs()
    {
        return ['flv', 'h263', 'mpeg4', 'flashsv', 'flashsv2', 'libh264'];
    }

    /**
     * {@inheritDoc}
     */
    public function getPasses()
    {
        return 0 === $this->getKiloBitrate() ? 1 : $this->passes;
    }

    /**
     * @param $passes
     *
     * @return FLV
     */
    public function setPasses($passes)
    {
        $this->passes = $passes;

        return $this;
    }

    /**
     * @return int
     */
    public function getModulus()
    {
        return 2;
    }
}
